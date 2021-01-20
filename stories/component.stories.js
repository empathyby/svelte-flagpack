import { action } from '@storybook/addon-actions';
import Component from '../src/index';

export default {
  title: 'Flag',
  component: Component,
};

export const Default = () => ({
  Component: Component,
});

export const Medium = () => ({
  Component: Component,
  props: { size: 'm' },
});

export const Small = () => ({
  Component: Component,
  props: { size: 's' },
});

export const NoBorder = () => ({
  Component: Component,
  props: { hasBorder: false },
});

export const WithDropShadow = () => ({
  Component: Component,
  props: { hasDropShadow: true },
});

export const NoBorderRadius = () => ({
  Component: Component,
  props: { hasBorderRadius: false },
});

export const TopDownGradient = () => ({
  Component: Component,
  props: { gradient: 'top-down' },
});

export const RealLinearGradient = () => ({
  Component: Component,
  props: { gradient: 'real-linear' },
});

export const RealCircularGradient = () => ({
  Component: Component,
  props: { gradient: 'real-circular' },
});

