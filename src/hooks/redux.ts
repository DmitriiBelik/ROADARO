import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppState } from '../redux/Store'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector