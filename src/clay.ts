export const TINTS = ['clay-lilac', 'clay-mint', 'clay-peach', 'clay-sky', 'clay-lemon', 'clay-pink'] as const;

export const tint = (i: number) => TINTS[i % TINTS.length];
