export { renderers } from '../renderers.mjs';

const page = () => import('./pages/generic_BNICMsEX.mjs').then(n => n.g);

export { page };
