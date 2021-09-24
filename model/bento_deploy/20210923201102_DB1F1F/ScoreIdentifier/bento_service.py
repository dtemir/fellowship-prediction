from bentoml import env, artifacts, api, BentoService
from bentoml.adapters import JsonInput

@env(infer_pip_packages=True)
class ScoreIdentifier(BentoService):
    """
    A score identifier service that returns a score based on the given data
    """

    @api(input=JsonInput())
    def predict(self, parsed_json):
        """
        An interface API that takes a JSON type input,
        calculates the score based on the data given,
        and returns it
        :param parsed_json:
        :return: score %
        """
        medians = {'Commits': 410,
                   'Followers': 16,
                   'Repos': 28,
                   'Stars': 4,
                   'Forks': 2,
                   'Organizations': 1,
                   'Issues': 44,
                   'Contributions': 32}
        score = 0
        for key in parsed_json.keys():
            if medians[key] < parsed_json[key]:
                score += 1

        score = (score / len(medians.keys())) * 100

        return score
