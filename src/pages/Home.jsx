import React from "react";
function Home() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1575570724505-bf19736b7f7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29pbmclMjB0byUyMHRyaXB8ZW58MHx8MHx8fDA%3D')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Explore the World with Us</h1>
        <p className="text-lg">Discover Amazing places at exclusive deals</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Home;
