import * as validation from "../../services/validation";
import * as sanitizer from "../../services/sanitizer";
import useForm from "../../hooks/useForm";
import style from "../pay/pay.module.css";
import MenuIcon from "../../components/MenuIcon";
import Input from "../../components/Input";
import Table from "../../components/Table";
import {useDispatch, useSelector} from "react-redux";
import {updateLoans} from "../../actions/usersAction";

const Lend = () => {
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
            amount: "",
        },
        formValidation,
        formSanitizer,
    );

    const saveData = () => {
        dispatch(updateLoans({
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
                <Table data={data.loans.length > 0 ? data.loans : [{amount: "", date: ""}]}/>
            </div>
        </div>
    );
};

export default Lend;