import styles from "./styles.module.css"
import { Content, Header, Sidebar } from "../../components"

export const MainLayout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <Sidebar />
            <Content />
        </div>
    )
}