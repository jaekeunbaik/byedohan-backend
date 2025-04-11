package main

import (
	"log"
	"net/http"

	"byedohan-backend/router"
)

func main() {
	r := router.SetupRouter()
	log.Println("🚀 Server running at http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}
