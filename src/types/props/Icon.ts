import React from 'react';

export interface Icon extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>, HTMLElement> {
  type: string;
  size?: string;
}
