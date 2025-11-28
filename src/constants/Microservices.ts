interface Microservice {
	ORDER: string;
	PRODUCT: string;
	REVIEW: string;
	RATING: string;
}

const MICROSERVICE: Microservice = {
	ORDER: import.meta.env.VITE_SERVICE_ORDER || "http://localhost:8081/order",
	PRODUCT: import.meta.env.VITE_SERVICE_PRODUCT || "http://localhost:8082/product",
	REVIEW: import.meta.env.VITE_SERVICE_REVIEW || "http://localhost:8084/review",
	RATING: import.meta.env.VITE_SERVICE_RATING || "http://localhost:8084/rating"
};

export default MICROSERVICE;
