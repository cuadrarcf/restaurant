const MODULE = 'INGREDIENTS';

const actions = {
  LOAD: `LOAD_${MODULE}`,
  LOAD_SUCCESS: `LOAD_SUCCESS_${MODULE}`,
  LOAD_ERROR: `LOAD_ERROR_${MODULE}`,

  SAVE_TO_API: `SAVE_TO_API_${MODULE}`,
  TOGGLE_HANDLE_MODAL: `TOGGLE_HANDLE_MODAL_${MODULE}`,
  UPDATE_SELECTED: `UPDATE_SELECTED_${MODULE}`,

  // load
  load: () => {
    return { type: actions.LOAD };
  },
  loadSuccess: (data: any) => ({
    type: actions.LOAD_SUCCESS,
    payload: { data }
  }),
  loadError: (error: any) => ({
    type: actions.LOAD_ERROR,
    payload: { error }
  }),

  // edit
  saveToApi: (data: any, actionName = 'insert') => ({
    type: actions.SAVE_TO_API,
    payload: { data, actionName }
  }),

  // modal
  toggleModal: (data = null) => ({
    type: actions.TOGGLE_HANDLE_MODAL,
    payload: { data }
  }),

  // selected
  updateSelected: (data:any) => ({
    type: actions.UPDATE_SELECTED,
    payload: { data }
  })
};
export default actions;
