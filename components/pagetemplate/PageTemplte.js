import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default function PageTemplate ({ children }) {

    return(
        <div className="h-full w-full grid grid-rows-[80px_calc([_h-full])_100px]">
            <header className="h-full w-full flex">
                <Header>

                </Header>
            </header>
            <main className="h-full w-full flex">
                <Content>
                    { children }
                </Content>
            </main>
            <footer className="h-full w-full flex">
                <Footer>

                </Footer>
            </footer>
        </div>
    )
}