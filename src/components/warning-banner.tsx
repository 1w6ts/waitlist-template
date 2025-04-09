"use client";
import React, { useState } from "react";
import { ExclamationTriangleIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface WarningBannerProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
  canClose?: boolean;
}

export function WarningBanner({
  children,
  className = "",
  onClose,
  canClose = true,
}: WarningBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible || !children) {
    return null;
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex items-start border-b border-yellow-200 bg-yellow-50 p-4 shadow-sm dark:border-yellow-800 dark:bg-yellow-950 ${className}`}
      role="alert"
    >
      <div className="flex-shrink-0 pt-0.5">
        <ExclamationTriangleIcon
          className="h-5 w-5 text-yellow-500 dark:text-yellow-400"
          aria-hidden="true"
        />
      </div>

      <div className="ml-3 flex-1 text-sm text-yellow-800 dark:text-yellow-200">
        {children}
      </div>

      {canClose && (
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              onClick={handleClose}
              className="inline-flex rounded-md bg-transparent p-1.5 text-yellow-600 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-background dark:text-yellow-300 dark:hover:bg-yellow-800/50 dark:focus:ring-yellow-600"
              aria-label="Dismiss"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
