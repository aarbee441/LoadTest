package performance

import io.gatling.core.Predef._

import scala.concurrent.duration._
import com.intuit.karate.gatling.PreDef._
import io.gatling.core.structure.ScenarioBuilder


class UserSimulation extends Simulation{

  val getUser: ScenarioBuilder = scenario("Load Test").exec(karateFeature("classpath:performance/GoogleSearch.feature"))

  setUp(getUser.inject(rampUsers(100).during(2000 millisecond)))
}
