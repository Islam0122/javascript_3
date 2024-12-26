

const Footer = () => {
    return (
        <footer className="bg-white text-gray-600 py-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <div className="flex items-center space-x-2">
                        <span className="text-red-500 text-2xl">🍕</span>
                        <span className="font-bold text-lg">Куда пицца</span>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold mb-2">Куда пицца</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="#" className="hover:text-gray-800">О компании</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-800">Пользовательское соглашение</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-800">Условия гарантии</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-2">Помощь</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="#" className="hover:text-gray-800">Ресторан</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-800">Контакты</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-800">Поддержка</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-800">Отследить заказ</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-2">Контакты</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="tel:+79262231011" className="hover:text-gray-800">
                                +7 (926) 223-10-11
                            </a>
                        </li>
                        <li>Москва, ул. Юных Ленинцев, д.99</li>
                        <li className="flex space-x-4">
                            <a href="#" className="hover:text-blue-500">Facebook</a>
                            <a href="#" className="hover:text-pink-500">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-6 text-center text-sm text-gray-500">
                &copy; Copyright 2024 — Куда Пицца
            </div>
        </footer>
    );
};

export default Footer;