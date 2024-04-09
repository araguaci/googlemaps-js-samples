/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_interaction_none]
function initMap() {
  const center = { lat: -25.363, lng: 131.044 };
  const zoom = 4;

  // [START maps_interaction_none_mapoptions]
  new google.maps.Map(document.getElementById("map"), {
    zoom,
    center,
    gestureHandling: "none",
  });
  // [END maps_interaction_none_mapoptions]
}

window.initMap = initMap;
// [END maps_interaction_none]
