
import HeaderFooter from '../../layouts/HeaderFooter'
import dynamic from 'next/dynamic'
const Olddriver = dynamic(import('../../components/OldDriver'),{
    loading: () => <p>loading...</p>
})

export default () => {
    console.log("我执行了 home.jsx")
    return (
        <div>
            123123123123
        </div>
    )
}