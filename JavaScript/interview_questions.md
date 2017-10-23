## JavaScript Interview Questions
## with accompanying commentary

1. Can you name two programming paradigms important for JavaScript app developers?

    <details>
    <summary> <code> answer </code> </summary>
    
    <br>
    <details>
    <summary> <code> good to hear </code> </summary>
    <br>

    </details>

    <br>
    <details>
    <summary> <code> red flags </code> </summary>
    <br>

    </details>

    </details>

2. What is functional programming?

    <details>
    <summary> <code> answer </code> </summary>
    
    <br>
    <details>
    <summary> <code> good to hear </code> </summary>
    <br>

    </details>

    <br>
    <details>
    <summary> <code> red flags </code> </summary>
    <br>

    </details>

    </details>

3. What is the difference between classical and prototypical inheritance?

    <details>
    <summary> <code> answer </code> </summary>
    
    <br>
    <details>
    <summary> <code> good to hear </code> </summary>
    <br>

    </details>

    <br>
    <details>
    <summary> <code> red flags </code> </summary>
    <br>

    </details>

    </details>

4. What are the pros and cons of functional programming vs object-oriented programming?

    <details>
    <summary> <code> answer </code> </summary>
    
    <br>
    <details>
    <summary> <code> good to hear </code> </summary>
    <br>

    </details>

    <br>
    <details>
    <summary> <code> red flags </code> </summary>
    <br>

    </details>

    </details>

5. When is classical inheritance an appropriate choice?

    <details>
    <summary> <code> answer </code> </summary>
    
    <br>
    <details>
    <summary> <code> good to hear </code> </summary>
    <br>

    </details>

    <br>
    <details>
    <summary> <code> red flags </code> </summary>
    <br>

    </details>

    </details>

6. When is prototypical inheritance an appropriate choice?

    <details>
    <summary> <code> answer </code> </summary>
    
    <br>
    <details>
    <summary> <code> good to hear </code> </summary>
    <br>

    </details>

    <br>
    <details>
    <summary> <code> red flags </code> </summary>
    <br>

    </details>

    </details>

7. What does 'favor object composition over class inheritance' mean?

    <details>
    <summary> <code> answer </code> </summary>
    
    <br>
    <details>
    <summary> <code> good to hear </code> </summary>
    <br>

    </details>

    <br>
    <details>
    <summary> <code> red flags </code> </summary>
    <br>

    </details>

    </details>

8. What is two-way binding and what is one-way data flow? How are they different? 

    <details>
    <summary> <code> answer </code> </summary>
    
    <br>
    <details>
    <summary> <code> good to hear </code> </summary>
    <br>

    </details>

    <br>
    <details>
    <summary> <code> red flags </code> </summary>
    <br>

    </details>

    </details>

9. What are the pros and cons of monolithic vs microservice architecture? 

    <details>
    <summary> <code> answer </code> </summary>
    
    <br>
    <details>
    <summary> <code> good to hear </code> </summary>
    <br>

    </details>

    <br>
    <details>
    <summary> <code> red flags </code> </summary>
    <br>

    </details>

    </details>

10. What is asynchronous programming? Why is it important in JavaScript?

    <details>
    <summary> <code> answer </code> </summary>

    Synchronous Programming: 
    - barring all conditionals and function calls, code is executed sequentially from top to bottom
    - this means blocking on long-running tasks like network requests

    Asynchronous Programming:
    - the engine runs in an event loop
    - when a blocking operation is needed, the request is initiated and the code continues to execute without blocking for the result
    - when the response is ready, an interruptor is fired, which causes an event handler to run, and results in a continuation of control flow
    - this allows a single thread to handle many concurrent operations 

    User Interfaces are typically asynchronous by nature, waiting for user input to interrupt the event loop and trigger event handlers. 

    Node is asynchronous by default, meaning the server waits in a loop for network requests to interrupt it, then accepting other requests while processing the first. 

    Why does this matter?
    - this allows for a natural fit between UI and the server
    - beneficial for performance on the server end  
    
    <br>
    <details>
    <summary> <code> good to hear </code> </summary>
    <br>

    - An understanding of what blocking means and the performance implications involved
    - An understanding of event handling and what it means for UI code

    </details>

    <br>
    <details>
    <summary> <code> red flags </code> </summary>
    <br>

    - Unfamiliar with terms 'asychronous' or 'synchronous'
    - Unable to articulate performance implications or the relationship between asychronous code and UI code

    </details>
    </details>