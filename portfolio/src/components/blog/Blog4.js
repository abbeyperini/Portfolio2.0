import React from 'react';
import Blog4Cover from '../../images/shibas.png';
import Blog4Gif from '../../images/shibaCounter.gif';

function Blog4() {
    return (
        <article>
            <img src={Blog4Cover} alt="'Counter!', a plus button, a minus button, and the current count reads 20. 14 of the 20 shiba pictures are show below the counter set up."></img>
            <h1>How To Reload a Page Whenever a User Makes a Change with React/Redux</h1>
            <h2>Originally published on Medium on January 7, 2020</h2>
            <p>You’ve got your React components. You figured out how to use Redux to feed them data. You make a component that creates/updates/deletes an item in your API, and put it in a page
                displaying the items from your API. How do you get the whole page to reload to show the updated data every time a user makes a change? Redux state and the <code>useEffect()</code>
                Dependency Array.</p>
            <p>It is possible to use only React to pass the data from our counter to the parent element to get almost the same counter effect in my example below, but using Redux state and the
                React <code>useEffect()</code> Dependency Array is easier in some ways, and applicable to many more situations.</p>
            <p>This article assumes basic familiarity with APIs, React, Redux, and Node. I started this app with create-react-app and am using functional components and hooks. You can find all the
                code in <a href="https://github.com/abbeyperini/ReactReload">this repository</a>. I’m working with React (v17.0.1), Redux (v4.0.5), <a href="https://www.npmjs.com/package/react-redux">
                react-redux</a> (v7.2.2), and <a href="https://www.npmjs.com/package/redux-thunk">redux-thunk</a> (v2.3.0). For this example, I used
                <a href="https://dog.ceo/dog-api/documentation/breed">Dog API</a> to get random Shiba Inu pictures to display.</p>
            <p>After testing the API endpoints (in this case in the browser with <a href="https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en">JSONView</a>), I
                started by setting up my action types and action creators for the Dog API GET request. I’m able to create async actions thanks to redux-thunk. For this small example, I’ve left my
                fetch requests inside the action creators.</p>
            <p>Below are the results of the action creator, with the loading action, which will be important later.</p>
            <pre>
                <code>
                    &gt; shibaActions.js
                    function shibesRequested() &#123; return &#123; type: shibaConstants.SHIBES_REQUESTED &#125; &#125;
                    function success(result) &#123; return &#123; type: shibaConstants.SHIBES_FETCHED, payload: result &#125; &#125;
                    function failure(error) &#123; return &#123; type: shibaConstants.SHIBE_FETCH_FAIL, payload: error &#125; &#125;
                </code>
            </pre>
            <p>Next the reducer:</p>
            <pre>
                <code>
                    &gt; shibaReducer.js
                    const reducer = (state = initialState, action) =&gt; &#123;
                        switch(action.type) &#123;
                            case shibaConstants.SHIBES_REQUESTED:
                                return &#123;
                                    ...state,
                                    shibasLoading: true,
                                    shibasFetched: false
                                &#125;
                            case shibaConstants.SHIBES_FETCHED:
                                return &#123;
                                    ...state,
                                    shibasLoading: false,
                                    shibasFetched: true,
                                    shibas: action.payload
                                &#125;
                            case shibaConstants.SHIBE_FETCH_FAIL:
                                return &#123;
                                    ...state,
                                    shibasLoading: false,
                                    shibasFetched: false
                                &#125;
                            default:
                                return state
                        &#125;
                    &#125;
                </code>
            </pre>  
            <p>Finally, I initialize the store. The first item in the composeEnhancers enables
                <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en">Redux Dev Tools</a>, and this setup allows the use of both dev tools and
                middleware (in this case, redux-thunk).</p>
            <pre>
                <code>
                    &gt; index.js
                    import &#123; compose, createStore, applyMiddleware &#125; from 'redux';
                    import &#123; Provider &#125; from 'react-redux';
                    import thunk from 'redux-thunk';
                    import reducer from './store/shibaReducer';
                    const rootReducer = reducer;
                    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
                    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
                    ReactDOM.render(
                    &lt;React.StrictMode&gt;
                        &lt;Provider store=&#123;store}&gt;
                        &lt;App /&gt;
                        &lt;/Provider&gt;
                    &lt;/React.StrictMode&gt;,
                    document.getElementById('root')
                    );
                </code>
            </pre> 
            <p>On to our components! I set up App.js to display Shiba pictures based on a number in local state. Were this a real app, I would take the time to create a unique key and alt text for
                each picture.</p>
            <pre>
                <code>
                    &gt; App.js
                    import &#123; connect &#125; from 'react-redux';
                    import &#123; shibaActions &#125; from './store/shibaActions';
                    import Counter from './components/Counter';
                    function App(props) &#123;
                    const [number, setNumber] = useState(1);
                    useEffect(() =&gt; &#123;
                        props.fetchShibes(number)
                    &#125;, []);
                    if (!props.shibes || !props.shibes[0]) &#123;
                        return (&lt;h1&gt; className="heading"&gt;Loading!&lt;/h1&gt;)
                    &#125; else &#123;
                        
                        let shibaImages = props.shibes.map(shiba =&gt; &#123;
                        return (
                            &lt;img className="image" src=&#123;shiba&#125; alt="shiba" key=&#123;shiba}&gt;
                            &lt;/img&gt;
                        );
                        &#125;)
                    
                        return (
                        &lt;div className="App"&gt;
                            &#123;shibaImages}
                            &lt;Counter /&gt;
                        &lt;/div&gt;
                        );
                    &#125;
                    &#125;
                    const mapStateToProps = (state) =&gt; &#123;
                    return &#123;
                        shibes: state.shibas
                    &#125;
                    &#125;
                    const mapDispatchToProps = (dispatch) =&gt; &#123;
                    return &#123;
                        fetchShibes: (num) =&gt; dispatch(shibaActions.fetchShibes(num))
                    &#125;
                    &#125;
                    export default connect(mapStateToProps, mapDispatchToProps)(App);
                </code>
            </pre> 
            <p>An empty <code>useEffect()</code> Dependency Array (the brackets after the function) means the page won’t re-render indefinitely, nor will a re-render be triggered by updates to the
                component’s dependencies. Note: <a href="https://medium.com/better-programming/understanding-the-useeffect-dependency-array-2913da504c44">Denny Scott</a> and the React team advise
                against empty Dependency Arrays because they’ll hide bugs.</p>
            <p>Now that my shibes are being displayed, I’ll start the counter component. Because this API doesn’t have POST, UPDATE, or DELETE endpoints, the counter will change the value of
                <var>num</var> passed to the GET request url within the action creator.</p>
            <pre>
                <code>
                    let url = `https://dog.ceo/api/breed/shiba/images/random/$&#123;num&#125;`;
                </code>
            </pre>
            <p>First I update my action types, action creators, and reducer. In this small example, I’m using a single file for each of these, but I would typically have multiple reducers and use
                the <code>combineReducers()</code> hook.</p>
            <pre>
                <code>
                    &gt; shibaActions.js
                    function addOne(num) &#123;
                        return dispatch =&gt; &#123;
                            let number = num + 1;
                            dispatch(add(number))
                        &#125;
                    function add(number)  &#123; return &#123; type: shibaConstants.ADD_ONE,  
                    payload: number &#125; &#125;
                    &#125;
                    function subOne(num) &#123;
                        return dispatch =&gt; &#123;
                            let number = num - 1;
                            dispatch(sub(number))
                        &#125;
                    function sub(number) &#123; return &#123; type: shibaConstants.SUB_ONE, 
                    payload: number &#125; &#125;     
                    &#125;
                    &gt; shibaReducer.js
                    case shibaConstants.ADD_ONE:
                    return &#123;
                        ...state,
                        counter: action.payload
                    &#125;
                    case shibaConstants.SUB_ONE:
                    return &#123;
                        ...state,
                        counter: action.payload
                    &#125;
                </code>
            </pre>
            <p>I also add the counter to the initial state, so that there is always 1 shibe.</p>
            <pre>
                <code>
                    &gt; shibaReducer.js
                    const initialState = &#123;shibasLoading: false, shibasFetched: false, counter: 1};
                    Now for the counter component itself — pretty straightforward.
                </code>
            </pre>
            <pre>
                <code>
                    &gt; Counter.js
                    import React from 'react';
                    import &#123; connect &#125; from 'react-redux';
                    import &#123; shibaActions &#125; from '../store/shibaActions';
                    function Counter(props) &#123;
                        const handleOnAdd = () =&gt; &#123;
                            props.addOne(props.counter)
                        &#125;
                    const handleOnSub = () =&gt; &#123;
                            props.subOne(props.counter)
                        &#125;
                    return (
                            &lt;div className="container-counter"&gt;
                                &lt;h1&gt; className="heading">Counter!&lt;/h1&gt;
                                &lt;button onClick=&#123;handleOnAdd}&gt;+&lt;/button&gt;
                                &lt;p&gt;&#123;props.counter}&lt;/p&gt;
                                &lt;button onClick=&#123;handleOnSub}&gt;-&lt;/button&gt;
                            &lt;/div&gt;
                        )
                    &#125;
                    const mapStateToProps = (state) => &#123;
                        return &#123;
                            counter: state.counter
                        &#125;
                    &#125;
                    const mapDispatchToProps = (dispatch) =&gt; &#123;
                        return &#123;
                            addOne: (num) =&gt; dispatch(shibaActions.addOne(num)),
                            subOne: (num) =&gt; dispatch(shibaActions.subOne(num))
                        &#125;
                    &#125;
                    export default connect(mapStateToProps, mapDispatchToProps)(Counter);
                </code>
            </pre>
            <p>Next, to make our page reload every time the button clicks change the counter, we have to go back to App.js. We’ll use <code>mapStateToProps()</code> to access the counter within
                the page component, and pass it instead of the local state <var>number</var> when we dispatch <code>fetchShibes()</code>.</p>
            <pre>
                <code>
                    &gt; App.js
                    // const [number, setNumber] = useState(1);
                    useEffect(() =&gt; &#123;
                        props.fetchShibes(props.counter)
                    &#125;, [props.counter]);
                </code>
            </pre>
            <p>As you can see above, the only thing we have to do to get the page to reload with the button changes is put the counter state in the <code>useEffect()</code> dependency brackets
                (the React team advises assigning the state to variables instead of using <code>props.state</code> within the Dependency Array). Add just a smidge of styling, and we have a basic,
                little Shiba Counter.</p>
            <img src={Blog4Gif} alt="clicking the counter buttons triggers a component rerender and the number of shiba pictures on the page changes accordingly"></img>
            <p>Getting the page to reload based on an async action is only slightly more difficult — you’d use the loading state like <code>shibasLoading</code> above. If you only use the end result
                state, like <code>shibasFetched</code>, then the page will only reload based on the first successful request. So if you have a user adding multiple things to your API, it will only
                show the first.</p>
            <p>This concept also lends to creating error messages within your app. After adding the <code>shibasFetched</code> and <code>shibasLoading</code> state objects to
                <code>mapStateToProps()</code>, I updated my App.js file.</p>
            <pre>
                <code>
                &gt; App.js
                if (!props.shibes || !props.shibes[0]) &#123;
                    return (
                    &lt;div&gt;
                        &#123;(props.shibasLoading || !props.shibasFetched) &amp;&amp; &lt;h1&gt;  
                        className="heading"&gt;Loading!&lt;/h1&gt;&#125;
                        &#123;!props.shibasLoading &amp;&amp; !props.shibasFetched &amp;&amp; 
                        &lt;h1&gt;Something went wrong - shibas not loaded.&lt;/h1&gt;&#125;
                    &lt;/div&gt;
                    )
                &#125; else &#123;
                    
                    let shibaImages = props.shibes.map(shiba =&gt; &#123;
                    return (
                        &lt;img className="image" src=&#123;shiba&#125; alt="shiba" key=&#123;shiba&#125;&gt;
                        &lt;/img&gt;
                    );
                    &#125;)
                
                    return (
                        &lt;div className="App"&gt;
                            &#123;!props.shibasLoading &amp;&amp; !props.shibasFetched &amp;&amp; 
                        &lt;h2&gt;Something went wrong - shibas not loaded.&lt;/h2&gt;&#125;
                        &lt;Counter /&gt;
                        &#123;shibaImages&#125;
                        &lt;/div&gt;
                    );
                &#125;
                </code>
            </pre>
            <p>Using JSX conditional logic and our Redux state, we can display different error messages based on the state of our async requests.</p>
            <h3>Conclusion</h3>
            <p>After struggling to figure it out myself, I strove to create a straightforward example of how to use the <code>useEffect()</code> hook to reload components based on changes
                other components are making.</p>
            <p>There are many ways to use this across an app, and the basic concept itself allows you to do fun things like custom error messages using JSX conditional logic.</p>
            <p>If this helped you when you got stuck or left you with a question, leave me a comment below!</p>
        </article>
    )
}

export default Blog4;