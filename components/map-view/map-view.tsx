import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { MAP_TYPES, Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  selectTravelTimeInformation,
  setTravelTimeInformation,
} from "@/store/slices/nav-slice";
import { Destination, Origin } from "@/types/location-types";
import { SafeAreaView } from "react-native-safe-area-context";
import MapViewDirections from "react-native-maps-directions";
import { images } from "@/constants";

const MapViewGoogle = () => {
  const origin: Origin | null = useSelector(selectOrigin);
  const destination: Destination | null = useSelector(selectDestination);

  const mapRef = useRef<MapView>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!origin || !destination) return;

    // Wait for the markers to be rendered
    setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
          animated: true,
          edgePadding: { top: 100, right: 100, bottom: 100, left: 100 }, // Increase the padding values as needed
        });
      }
    }, 100);
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${process.env.GOOGLE_MAPS_API}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        });
    };
    getTravelTime();
  }, [origin, destination, process.env.GOOGLE_MAPS_API]);

  const darkGrayscaleMapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#181818",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1b1b1b",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#2c2c2c",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8a8a8a",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#373737",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#3c3c3c",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#4e4e4e",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3d3d3d",
        },
      ],
    },
  ];
  return (
    <MapView
      ref={mapRef}
      initialRegion={{
        latitude: origin?.location?.lat || 0,
        longitude: origin?.location?.lng || 0,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
      mapType={"mutedStandard"}
      className="flex-1"
      customMapStyle={darkGrayscaleMapStyle}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey="AIzaSyBp-4UVVsAE3hQ0Oy-E2sgmSXBqUdLN0ts"
          strokeWidth={3} // Increase the stroke width
          strokeColor="#4de59c" // Set the stroke color with transparency
          optimizeWaypoints={true}
          mode="DRIVING"
          language="en"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location?.lat || 0,
            longitude: origin?.location?.lng || 0,
          }}
          title="Your Reezap Origin"
          description={origin.description || ""}
          identifier="origin"
          image={images.placeholder}
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination?.location?.lat || 0,
            longitude: destination?.location?.lng || 0,
          }}
          title="Your Reezap Destination"
          description={destination.description || ""}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default MapViewGoogle;
