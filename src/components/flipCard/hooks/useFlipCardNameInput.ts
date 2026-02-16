import { ChangeEvent, useState } from "react";

export type FlipCardNameInput = {
    currentName: string,
    updateName: (event: ChangeEvent<HTMLInputElement>) => void,
    clearName: () => void;
};

export default function useFlipCardNameInput(): FlipCardNameInput {
    const [name, setName] = useState<string>("");

    function updateName(event: ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    function clearName(): void {
        setName("");
    }

    return {
        currentName: name,
        updateName,
        clearName
    }
} 