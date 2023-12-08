import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { selectFilter } from "../../redux/cars/carsSelectors";
import { resetFilter, setFilter } from "../../redux/cars/carsSlice";
import { useCreateOwnMakes } from "../../hooks/useCreateOwnMakes";
import { carStyles, priceStyles } from "./SelectStyle";
import {
    Button,
    ButtonDiv,
    FilterMainDiv,
    InputMax,
    InputMin,
    InputsDiv,
    LabelInput,
    LabelName,
} from "./Filter.styled";

export default function Filter({ cars }) {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    const ownBrands = useCreateOwnMakes(cars, "make");
    const brandOptions = [...ownBrands.map((brand) => ({ value: brand, label: brand }))];
    const priceOptions = [
        ...[...Array(30)].map((_, i) => ({
            label: `${(i + 1) * 10}`,
            value: (i + 1) * 10,
        })),
    ];

    useEffect(() => {
        reset(filter);
    }, [filter, reset]);

    const onSubmit = (data) => {
        dispatch(setFilter(data));
    };

    const resetReduxFilter = () => {
        dispatch(resetFilter());
        reset({
            brand: "",
            price: "",
            from: "",
            to: "",
        });
    };

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FilterMainDiv>
                    <LabelInput>
                        <LabelName>Car brand</LabelName>
                        <Controller
                            name="brand"
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={brandOptions}
                                    isSearchable={true}
                                    styles={carStyles}
                                    placeholder="Enter the text"
                                />
                            )}
                            control={control}
                            defaultValue=""
                        />
                    </LabelInput>
                    <LabelInput>
                        <LabelName>Price/ 1 hour</LabelName>
                        <Controller
                            name="price"
                            render={({ field }) => (
                                <Select {...field} options={priceOptions} styles={priceStyles} placeholder="to" />
                            )}
                            control={control}
                            defaultValue=""
                        />
                    </LabelInput>

                    <LabelInput>
                        <LabelName>Car mileage / km</LabelName>
                        <InputsDiv>
                            <InputMin type="number" {...register("from", { valueAsNumber: true, min: 0 })} />
                            {errors.from && errors.from.type === "min" && <p>Enter a valid number</p>}
                            <InputMax type="number" {...register("to", { valueAsNumber: true, min: 0 })} />
                            {errors.to && errors.to.type === "min" && <p>Enter a valid number</p>}
                        </InputsDiv>
                    </LabelInput>

                    <ButtonDiv>
                        <Button type="submit" value="search" />
                        <Button type="button" value="reset" onClick={resetReduxFilter} />
                    </ButtonDiv>
                </FilterMainDiv>
            </form>
        </section>
    );
}

Filter.propTypes;
