import Input from "../../components/Input";
import useForm from "../../hooks/useForm";
import * as validation from "../../services/validation";
import * as sanitizer from "../../services/sanitizer";
import MenuIcon from "../../components/MenuIcon";
import style from "./pay.module.css";
import Table from "../../components/Table";
import {useDispatch, useSelector} from "react-redux";
import {updatePayment} from "../../actions/usersAction";

const Pay = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.app)

    // validation
    const formValidation = {
        amount: validation.validateAmount,
    };

    // Sanitizer
    const formSanitizer = {
        amount: sanitizer.sanitizeAmount,
    };

    // FORM DATA
    const {formData, handleChange, handleBlur, errors, initialize, checkValid} = useForm(
        {
            amount: 0,
        },
        formValidation,
        formSanitizer,
    );

    const saveData = () => {
        if (!checkValid()) {
            return;
        }

        if (data.totalSavings === 0) {
            alert("You have no savings to pay")
            return
        }

        if (data.totalSavings < formData.amount) {
            alert("You don't have enough savings to pay")
            return
        }

        if (data.totalLoans === 0) {
            alert("You have no loans to pay")
            return
        }


        dispatch(updatePayment({
            amount: +formData.amount,
            date: new Date(),
        }))
    };

    return (
        <div className={style.container}>
            <div className={style.content}>
                <MenuIcon/>
                <div className={style.payForm}>
                    <Input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        placeholder="1.000.000"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        errorMessage={errors.amount}
                        variant="textfield"
                    />

                    <button onClick={saveData} className={style.buttonSubmit}>Submit</button>
                </div>
                <Table data={data.payments.length > 0 ? data.payments : [{amount: "", date: ""}]}/>
            </div>
        </div>
    );
};

export default Pay;