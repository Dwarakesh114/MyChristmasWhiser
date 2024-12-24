import React from 'react';

export default function Mountains() {
  return (
    <div className="absolute bottom-0 w-full h-1/3 pointer-events-none">
      {/* Back mountains */}
      <div className="absolute bottom-0 w-full">
        <div className="absolute bottom-0 w-full h-48 bg-blue-900 transform skew-y-6"></div>
        <div className="absolute bottom-0 w-full h-48 bg-blue-900 transform -skew-y-6"></div>
      </div>
      {/* Front mountains with snow caps */}
      <div className="absolute bottom-0 w-full">
        <div className="absolute bottom-0 w-1/2 h-64 bg-blue-800 transform skew-y-12">
          <div className="absolute top-0 w-full h-8 bg-white transform -skew-y-6"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-64 bg-blue-800 transform -skew-y-12">
          <div className="absolute top-0 w-full h-8 bg-white transform skew-y-6"></div>
        </div>
      </div>
    </div>
  );
}
