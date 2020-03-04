import actions from './actions';

export interface IReducer {
  isLoading: boolean;
  errorMessage: boolean;
  modalActive: boolean;
  models: any[];
  selected: null;
}

const initState: IReducer = {
  isLoading: false,
  errorMessage: false,
  modalActive: false,
  models: [],
  selected: null
};

export default function reducer(state = initState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case actions.CRUD_API:
      return {
        ...state,
        isLoading: true,
        errorMessage: false,
        modalActive: false
      };

    case actions.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        models: payload.data,
        errorMessage: false
      };

    case actions.LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'There is a loading problem'
      };

    case actions.TOGGLE_HANDLE_MODAL:
      return {
        ...state,
        modalActive: !state.modalActive,
        selected: payload.data || null
      };

    case actions.UPDATE_SELECTED:
      return {
        ...state,
        selected: payload.data
      };

    default:
      return state;
  }
}

