import Loadable from 'react-loadable';

const MyLoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};

const codeSplit = files => {
    return Loadable({
        loader: () => import(`../${files}/index`),
        loading: MyLoadingComponent,
        delay: 300
    });
};
const Index = codeSplit('index');
const Form = codeSplit('form');

const routes = [
    {
        path: `/index`,
        component: Index,
        belong: 'index'
    },
    {
        path: `/form`,
        component: Form,
        belong: 'Form'
    }
];

export default routes;
