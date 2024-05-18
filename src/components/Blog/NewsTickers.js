import Ticker, { NewsTicker } from 'nice-react-ticker';

const NewsTickers = ({blog}) => {
    return (
        <NewsTicker title={blog.title.rendered}  />
    );
}
export default NewsTickers;