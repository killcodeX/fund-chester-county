import React from 'react'; // Import React
import "@/styles/globals.css";

interface ContainerProps {
    children: React.ReactNode;
  }

export default function Container({ children }: ContainerProps): React.ReactElement {
    return <div className="container">{children}</div>;
  }