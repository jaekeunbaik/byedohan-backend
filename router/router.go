package router

import (
	"github.com/gorilla/mux"
	"byedohan-backend/handler"
)

func SetupRouter() *mux.Router {
	r := mux.NewRouter()
	r.HandleFunc("/api/hello", handler.HelloHandler).Methods("GET")
	return r
}
