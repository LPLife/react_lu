import Loadable from 'react-loadable';

const MyLoadingComponent = ({isLoading, error}) => {
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }

    return null;
};

const codeSplit = (files) => {
    return Loadable({
        loader: () => import(`../${files}`),
        loading: MyLoadingComponent,
        delay: 300
    });
};
const Index = codeSplit('index');
const Form = codeSplit('form');
const Test = codeSplit('test');

const routes = [
    {
        path: '/index',
        component: Index,
        belong: 'index'
    },
    {
        path: '/form',
        component: Form,
        belong: 'Form'
    },
    {
        path: '/test',
        component: Test,
        belong: 'Test'
    }
];

export default routes;
