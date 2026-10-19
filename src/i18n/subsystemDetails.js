// Rich bilingual subsystem data for 3D tooltip windows
// Sources: video_tc_task.txt + VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT
import { sdHeatShield } from './sd_heatShield.js';
import { sdFaradayCup } from './sd_faradayCup.js';
import { sdWaterCooling } from './sd_waterCooling.js';
import { sdNiobiumAntennas } from './sd_niobiumAntennas.js';
import { sdTitaniumTruss } from './sd_titaniumTruss.js';
import { sdSolarPanels } from './sd_solarPanels.js';
import { sdSolarSensors } from './sd_solarSensors.js';
import { sdUmbra } from './sd_umbra.js';
import { sdRadiators } from './sd_radiators.js';
import { sdWireHarness } from './sd_wireHarness.js';

export const subsystemDetails = {
  heatShield: sdHeatShield,
  faradayCup: sdFaradayCup,
  wireHarness: sdWireHarness,
  waterCooling: sdWaterCooling,
  niobiumAntennas: sdNiobiumAntennas,
  titaniumTruss: sdTitaniumTruss,
  solarPanels: sdSolarPanels,
  solarSensors: sdSolarSensors,
  umbra: sdUmbra,
  radiators: sdRadiators
};
