'use client';

import { useEffect } from 'react';
import 'flowbite'; // 👈 This imports the Flowbite JS once on client

export default function FlowbiteInit() {
  useEffect(() => {
    // JS auto-inits based on data attributes
    // No need for manual init in most cases
  }, []);

  return null;
}
