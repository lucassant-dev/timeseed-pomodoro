import type { JSX } from "react";
import FormRow from "@/components/form/formRow";
import InputBox from "@/components/inputBox";
import Flow from "@/components/flow";
import ActionButton from "@/components/actionButton";
import { FormDiv } from "./styles";

export default function Form(): JSX.Element {
    return (
        <FormDiv>
            <FormRow>
                <InputBox
                    placeholder="Input task"
                    label="Task"
                />
            </FormRow>
            <FormRow>
                <Flow />
            </FormRow>
            <FormRow>
                <ActionButton />
            </FormRow>
        </FormDiv>
    );
}
