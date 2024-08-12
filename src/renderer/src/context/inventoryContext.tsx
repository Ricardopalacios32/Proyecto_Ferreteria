import { useReducer, createContext, Dispatch, ReactNode} from "react";
import { inventoryActions, initialstate, inventoryReducer, inventorystate  } from "@renderer/reducers/inventoryReducer";

type inventoryContextProps = {
    state : inventorystate
    dispatch : Dispatch<inventoryActions>
}

type inventoryProviderProps = {
    children : ReactNode
}

export const InventoryContext = createContext<inventoryContextProps>(null!)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const InventoryProvider = ({children} : inventoryProviderProps) => {

    // @ts-ignore (type bug)
    const [state, dispatch] = useReducer(inventoryReducer, initialstate)

    return (
        <InventoryContext.Provider
            value= {{
                state,
                dispatch
            }}
        >{children}
        </InventoryContext.Provider>
    )
}