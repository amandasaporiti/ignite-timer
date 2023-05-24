// import { FormContainer, TaskInput, MinuteAmountInput } from "./styles"
// import { useContext } from "react"
// import { CyclesContext } from "../../../../contexts/CyclesContext"
// import { useFormContext } from "react-hook-form"

// export const NewCycleForm = () => {
//   const { activeCycle } = useContext(CyclesContext)
//   const { register } = useFormContext()

//   return (
//     <FormContainer>
//       <label htmlFor="task">Vou trabalhar em </label>
//       <TaskInput
//         id="task"
//         type="text"
//         placeholder="Dê um nome para o seu projeto"
//         disabled={!!activeCycle} // !! se for thrthu (tiver algum valor dentro converte pra true)
//         list="task-suggestions"
//         {...register("task")}
//       />

//       <datalist id="task-suggestions">
//         <option value="Projeto 1" />
//         <option value="Projeto 2" />
//         <option value="Projeto 3" />
//       </datalist>

//       <label htmlFor="minutesAmount">durante </label>
//       <MinuteAmountInput
//         id="minutesAmount"
//         type="number"
//         placeholder="00"
//         disabled={!!activeCycle} // !! se for thrthu (tiver algum valor dentro converte pra true)
//         step={5}
//         min={0}
//         max={60}
//         {...register("minutesAmount")}
//       />
//       <span>minutos.</span>
//     </FormContainer>
//   )
// }

import { FormContainer, MinuteAmountInput, TaskInput } from "./styles"
import { useContext } from "react"
import { useFormContext } from "react-hook-form"
import { CyclesContext } from "../../../../contexts/CyclesContext"

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Banana" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinuteAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}