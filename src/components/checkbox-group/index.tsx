import './index.css';
import { CheckBox, CheckBoxModel } from "../checkbox"
import { useState } from 'react';

interface IProps {
  label: string
  values: string[]
}

type CheckBoxModelMap = {
  [key: string]: CheckBoxModel
}

const buildModels = (values: string[], selected = false): CheckBoxModelMap => {
  return values.reduce((acc, value) => {
    acc[value] = {
      label: value,
      selected,
    }
    return acc;
  }, {} as CheckBoxModelMap);
}

export const CheckBoxGroup = (props: IProps) => {
  const { label, values } = props
  const [models, setModels] = useState<CheckBoxModelMap>(buildModels(values))
  const [groupModel, setGroupModel] = useState<CheckBoxModel>({
    label,
    selected: false,
  })

  const onChangeAll = (selected: boolean) => {
    const newModels = buildModels(values, selected)
    setModels(newModels)
  }

  const onChange = (selected: boolean, model: CheckBoxModel) => {
    const newModels = {
      ...models,
      [model.label]: {
        label: model.label,
        selected
      }
    }
    const allSelected = Object.values(newModels).reduce((acc, model) => (acc && model.selected), true)

    setModels(newModels)
    setGroupModel({ ...groupModel, selected: allSelected })
  }

  return (
    <>
      <CheckBox model={groupModel} onChange={onChangeAll} />
      {
        Object.values(models).map((model: CheckBoxModel) => {
          return (
            <CheckBox key={model.label} model={model} onChange={onChange} />
          );
        })}
    </>
  );
}
