
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/camper/all": {
        "get": {
          "operationId": "CamperController_findAll",
          "summary": "Отримання камперів",
          "parameters": [],
          "responses": {
            "200": {
              "description": "Успішне отримання камперів"
            }
          },
          "tags": [
            "Операції з камперами"
          ]
        }
      },
      "/camper/create": {
        "post": {
          "operationId": "CamperController_createFavorite",
          "summary": "Додати улюблений кампер",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Створений кампер"
            }
          },
          "tags": [
            "Операції з камперами"
          ]
        }
      },
      "/camper/delete/{id}": {
        "delete": {
          "operationId": "CamperController_removeFavorite",
          "summary": "Видалити улюблений кампер",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Ідентифікатор улюбленого кампера",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Видалений кампер"
            }
          },
          "tags": [
            "Операції з камперами"
          ]
        }
      },
      "/camper/allFavorite": {
        "get": {
          "operationId": "CamperController_findAllFavorite",
          "summary": "Отримання улюблених камперів",
          "parameters": [],
          "responses": {
            "200": {
              "description": "Масив отриманних камперів"
            }
          },
          "tags": [
            "Операції з камперами"
          ]
        }
      }
    },
    "info": {
      "title": "Backend Camper rentals API",
      "description": "Documentations REST API",
      "version": "1.0.0",
      "contact": {}
    },
    "tags": [
      {
        "name": "Volodymyr Dehtiarev",
        "description": ""
      }
    ],
    "servers": [],
    "components": {
      "schemas": {}
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}
