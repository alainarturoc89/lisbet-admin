export default {

    login: ({ username }) => {

        localStorage.setItem('username', username);

    /*
     firebase.auth().signInWithEmailAndPassword(email, password)

        .then((user) => {

          if (user !== null) {

            return login(user.user);

          }

          else {

            changeLoading(false);

          }

        })

        .catch((error) => {

          changeLoading(false);

          Alert.alert(
            "Ummmmm",
            "Qué pasa, no recuerdas la información que se solicita? jejeje, prueba una vez más y no me desiluciones...",
            [{ text: "Cerrar" }],
            { cancelable: true }
          );

        });
    */

        return Promise.resolve();

    },

    logout: () => {

        localStorage.removeItem('username');

        return Promise.resolve();

    },

    checkError: ({ status }) => {

        if (status === 401 || status === 403) {

            localStorage.removeItem('username');

            return Promise.reject();

        }

        return Promise.resolve();

    },

    checkAuth: () => {

        return localStorage.getItem('username')

            ? Promise.resolve()

            : Promise.reject();

    },

    getPermissions: () => Promise.resolve(),

};