// src/fakeApi.js
const destinations = [
    {
      id: 1,
      name: "Paris",
      description: "Visit the Eiffel Tower and Louvre Museum!",
    },
    {
      id: 2,
      name: "New York",
      description: "Explore Times Square and Central Park!",
    },
    // Add more destinations here
  ];
  
  export function fetchDestinations() {
    // Simulate an API call delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(destinations), 1000);
    });
  }
  