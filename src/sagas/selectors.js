export const getPack = (state, id) => state.packs.items.find(item => item.id == id)
export const getSelectedPack = (state) => state.packs.selectedPack
export const getAllPacks = (state) => state.packs.items