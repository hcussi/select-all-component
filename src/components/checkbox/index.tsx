import { useEffect, useState } from "react"

interface IProps {
  model: CheckBoxModel
  onChange: (selected: boolean, model: CheckBoxModel) => void
}

export interface CheckBoxModel {
  label: string
  selected: boolean
}

export const CheckBox = (props: IProps) => {
  const { model, onChange } = props
  const [ selected, setSelected ] = useState<boolean>(model.selected)

  useEffect(() => {
    setSelected(model.selected)
  }, [ model ]);

  const onChangeEvent = () => {
    setSelected(!selected)
    onChange(!selected, model)
  }

  return (
    <label>
      <input
        data-testid={`checkbox_${model.label}`}
        type="checkbox"
        value={model.label}
        checked={selected} onChange={onChangeEvent} />
        {model.label}
    </label>
  );
}
