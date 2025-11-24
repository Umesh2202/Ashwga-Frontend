interface Microservice {
	ORDER: string;
	PRODUCT: string;
}

const MICROSERVICE: Microservice = {
	ORDER: import.meta.env.VITE_SERVICE_AUTH || "http://localhost:8081/order",
	PRODUCT: import.meta.env.VITE_SERVICE_CASE || "http://localhost:8082/product"
};

export default MICROSERVICE;
