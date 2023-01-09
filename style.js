/* Default styling */
.container {
    font-size: 3rem;
    font-weight: bolder;
    color: white;
    width: 100%;
    height: 50px;
    margin: 10px;
    text-align: center;
}

/* When the browser is at most 600px or less */
@media (max-width: 600px) {
    .container {
        background-color: blue;
    }
}

/* When the browser is at least 600px and above */
@media (min-width: 600px) {
    .container {
        background-color: red;
    }
}