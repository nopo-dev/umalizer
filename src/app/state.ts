import type { Uma } from './types';

// Global state singleton
export const AppState = {
  umas: [] as Uma[],

  addUma(uma: Uma) {
    this.umas.push(uma);
  },

  removeUma(id: string) {
    this.umas = this.umas.filter(u => u.id !== id);
  },

  updateUma(id: string, updated: Partial<Uma>) {
    const idx = this.umas.findIndex(u => u.id === id);
    if (idx !== -1) {
      this.umas[idx] = { ...this.umas[idx], ...updated };
    }
  }
};