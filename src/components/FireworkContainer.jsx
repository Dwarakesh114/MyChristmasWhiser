import React from 'react';
import Firework from './Firework';
import { FIREWORK_CONFIG } from '../config/fireworksConfig';

export default function FireworkContainer() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(FIREWORK_CONFIG.minFireworks)].map((_, i) => (
        <Firework key={i} />
      ))}
    </div>
  );
}
