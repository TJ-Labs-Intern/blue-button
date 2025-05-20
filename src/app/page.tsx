'use client';

import Button from "../components/Button";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex gap-4">
        <Button variant="primary" onClick={() => alert('Learn more')}>Learn more</Button>
        <Button variant="outline">Buy</Button>
      </div>
    </div>
  );
}
