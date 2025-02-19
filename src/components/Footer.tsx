import React from "react";

interface FooterProps {
  year: string;
  fullName: string;
  studentId: string;
}

export default function Footer(props:any) {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        Copyright © {props.year} {props.fullName} {props.studentId}
      </p>
    </div>
  );
}
