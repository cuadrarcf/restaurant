const MODULE = 'INGREDIENTS';

export interface IActions {
  LOAD: string;
  LOAD_SUCCESS: string;
  LOAD_ERROR: string;
  SAVE_TO_API: string;
  TOGGLE_HANDLE_MODAL: string;
  UPDATE_SELECTED: string;
  load: () => { type: string };
  loadSuccess: (data: any) => { payload: { data: any }; type: string };
  loadError: (error: any) => { payload: { error: any }; type: string };
  saveToApi: (data: any, actionName?: string) => { payload: { data: any; actionName: string }; type: string };
  toggleModal: (data?: any) => { payload: { data: any }; type: string };
  updateSelected: (data: any) => { payload: { data: any }; type: string };
}

const actions: IActions = {
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
  updateSelected: (data: any) => ({
    type: actions.UPDATE_SELECTED,
    payload: { data }
  })
};
export default actions;
