const MODULE = 'INGREDIENTS';

export interface IActions {
  LOAD_SUCCESS: string;
  LOAD_ERROR: string;
  CRUD_API: string;
  UPDATE_SELECTED: string;

  onCrudApi: (actionName: string, data: any) => { payload: { data: any; actionName: string }; type: string };
  onLoadSuccess: (data: any) => { payload: { data: any }; type: string };

  onLoadError: (error: any) => { payload: { error: any }; type: string };
  onUpdateSelected: (data: any) => { payload: { data: any }; type: string };
}

const actions: IActions = {
  CRUD_API: `CRUD_API_${MODULE}`,
  LOAD_SUCCESS: `LOAD_SUCCESS_${MODULE}`,
  LOAD_ERROR: `LOAD_ERROR_${MODULE}`,
  UPDATE_SELECTED: `UPDATE_SELECTED_${MODULE}`,

  onCrudApi: (actionName, data: any) => ({
    type: actions.CRUD_API,
    payload: { data, actionName }
  }),

  onLoadSuccess: (data: any) => ({
    type: actions.LOAD_SUCCESS,
    payload: { data }
  }),

  onLoadError: (error: any) => ({
    type: actions.LOAD_ERROR,
    payload: { error }
  }),

  onUpdateSelected: (data: any) => ({
    type: actions.UPDATE_SELECTED,
    payload: { data }
  })
};

export default actions;
