/**
 * Main function that allows to create data-binding with textarea
 * @param {*} className name of the textarea's class
 * @param {*} limit limit of characters for the textarea
 */
const txBinding = (className, limit) =>{
    /**
     * Defining inner and main scopes
     */
    var $innerScope = {};
    var $limitScope = {
        limit: limit,
        current: 0,
        error: ''
    };

    /**
     * Error occurred if limit or className isn't provided
     */
    if(!limit || !className){
        throw Error('Please provide className or/and limit');
    }

    /**
     * Creating data-binding
     */
    const regScope = () =>{
        Object.defineProperty($innerScope, 'current', {
            set: function(newValue){
                let element = document.querySelector('[tx-bind=current]');
    
                element.innerHTML = newValue;
                $limitScope.current = newValue;
            },
            get: function(){
                return $limitScope.current;
            }
        })
        Object.defineProperty($innerScope, 'limit', {
            set: function(newValue){
                let element = document.querySelector('[tx-bind=limit]');
    
                element.innerHTML = newValue;
                $limitScope.limit = newValue;
            },
            get: function(){
                return $limitScope.limit;
            }
        })
        Object.defineProperty($innerScope, 'error', {
            set: function(newValue){
                let element = document.querySelector('[tx-bind=error]');
    
                element.innerHTML = newValue;
                $limitScope.error = newValue;
            },
            get: function(){
                return $limitScope.error;
            }
        })
    }

    /**
     * Creating listener for keyup and paste
     * @param {} e Event
     */
    const listener = (e) =>{
        if(e.target.value.length > $innerScope.limit){
            textarea.value = String.prototype.slice.apply(e.target.value, [0, $innerScope.limit]);

            /** Throw an error */
            $innerScope.error = 'Maximum characters exceeded';
        }

        $innerScope.current = e.target.value.length;

        if(e.target.value.length < $innerScope.limit) $innerScope.error = '';
    }


    /**
     * Gets textarea and add event listeners for it
     */
    var textarea = document.getElementsByClassName(className)[0];

    textarea.addEventListener('keyup', listener);
    textarea.addEventListener('paste', listener);

    regScope();

    /**
     * Default binding
     */
    
    $innerScope.current = $limitScope.current;
    $innerScope.limit = $limitScope.limit;
    $innerScope.error = $limitScope.error;
}