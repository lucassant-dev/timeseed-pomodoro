import { useState } from "react";

export type FlipCardTimingValues = {
    hours: string,
    seconds: string,
    minutes: string
};

type TimingKey = keyof FlipCardTimingValues;

type KeyAndValueSetter = (key: TimingKey, value: string) => void;
type NormalizeBlurSetter = (key: TimingKey) => void;

export type FlipCardTiming = {
    timingValues: FlipCardTimingValues,
    updateTimingValue: KeyAndValueSetter,
    clearTimingValues: () => void,
    blurInputAndNormalizeTimingValue: NormalizeBlurSetter,
    totalTimeInSeconds: number,
    inputIsFocused: boolean,
    focusInput: () => void
};

export default function useFlipCardTimingInput(): FlipCardTiming {
    const emptyValues: FlipCardTimingValues = {
        hours: "",
        minutes: "",
        seconds: ""
    };

    const [timingValues, setTimingValues] = useState<FlipCardTimingValues>(emptyValues);

    const [totalTimeInSeconds, setTotalTimeInSeconds] = useState<number>(0);
    const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);

    function updateTimingValue(key: keyof FlipCardTimingValues, value: string): void {
        const onlyDigits: string = value.replace(/\D/g, "");
        
        onlyDigits.length <= 2 && setTimingValues((prev) => ({
            ...prev,
            [key]: onlyDigits
        }));
    }

    function clearTimingValues(): void {
        setTimingValues(emptyValues);
        setTotalTimeInSeconds(0);
    }

    function focusInput(): void {
        setInputIsFocused(true);
    }

    function blurInputAndNormalizeTimingValue(key: keyof FlipCardTimingValues): void {
        setInputIsFocused(false);

        setTimingValues((prev) => {
            const rawValue: number = Number(prev[key] ?? 0);
            const max: number = key === "hours" ? 23 : 59;
            const newValue: string = rawValue > 0 ? String(Math.min(rawValue, max)).padStart(2, "0") : "";

            const newTimingValues: FlipCardTimingValues = {
                ...prev,
                [key]: newValue
            };

            setTotalTimeInSeconds(calculateTotalSeconds(newTimingValues));

            return newTimingValues;
        });
    }

    function calculateTotalSeconds(currentTimingValues: FlipCardTimingValues) {
        const [hours, minutes, seconds] = Object.values(currentTimingValues).map((v) => !v ? 0 : Number(v));
        return (((hours * 60) + minutes) * 60) + seconds;
    };

    return {
        totalTimeInSeconds,
        timingValues,
        updateTimingValue,
        clearTimingValues,
        inputIsFocused,
        focusInput,
        blurInputAndNormalizeTimingValue
    }
}