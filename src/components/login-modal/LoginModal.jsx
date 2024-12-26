import { TfiClose } from "react-icons/tfi";

const LoginModal = (props) => {
    const {setShowModal} = props;
    return (
        <div className={"fixed flex items-center w-full h-[100vh] inset-0 bg-[#19191966] justify-center"}>
            <div className={"text-center w-[850px] relative rounded-[24px] bg-white py-[60px]"}>
                <button onClick={ () => setShowModal('')}
                    className={"absolute text-white -right-[30px] top-0"}>
                    <TfiClose/>
                </button>
                <div className={"w-[320px] mx-auto"}>
                <h2 className={"text-[32px] mb-[16px]"}>Вход в аккаунт</h2>
                <p className={"mb-[20px]"}>
                Сможете быстро оформлять заказы,
                использовать бонусы
                </p>
                <label className={"block mb-[8px] text-[#A5A5A5] text-left"} htmlFor={"tel"}> Номер телефона</label>
                <input className={"w-[320px] focus:outline-0 border border-[#F0F0F0] py-[13px] px-[16px]" +
                    " rounded-[6px]"} type={"tel"} id={"tel"} placeholder={"+996"}/>
                    <button onClick={ () => setShowModal('kod')}
                        className={"w-full text-white mt-[16px] mb-[12px] py-[13px] bg-[#FF7010] rounded-[16px]"}>
                        Войти </button>
                    <p className={"text-center text-[#A5A5A5]"}>
                        Продолжая, вы соглашаетесь со сбором и обработкой персональных данных
                        и пользовательским соглашением
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;